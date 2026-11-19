import { useState } from 'react';
import { textoPorId } from '../data/textos';
import { TIPOS } from '../data/teoria';

// Envuelve una parte del texto; en modo estructura muestra su nombre.
function Parte({ nombre, ver, children, className = '' }) {
  return (
    <div className={`parte ${ver ? 'parte-on' : ''} ${className}`} data-parte={nombre}>
      {ver && <span className="parte-label">{nombre}</span>}
      {children}
    </div>
  );
}

// Resalta las citas “…” y, opcionalmente, los años.
function Rico({ texto, ver }) {
  const trozos = texto.split(/(“[^”]+”)/g);
  return trozos.map((t, i) => {
    if (t.startsWith('“')) return <span key={i} className={ver ? 'cita cita-on' : 'cita'} title={ver ? 'Cita / testimonio' : undefined}>{t}</span>;
    if (!ver) return t;
    return t.split(/(\b1[89]\d{2}\b|\b20\d{2}\b)/g).map((u, k) =>
      /^(1[89]\d{2}|20\d{2})$/.test(u) ? <mark key={`${i}-${k}`} className="fecha">{u}</mark> : u,
    );
  });
}

function Noticia({ c, ver }) {
  return (
    <article className="txt txt-noticia">
      <div className="periodico-cabecera">DIARIO · EDICIÓN DIGITAL</div>
      <Parte nombre="Epígrafe" ver={ver}><p className="n-epigrafe">{c.epigrafe}</p></Parte>
      <Parte nombre="Titular" ver={ver}><h2 className="n-titular">{c.titular}</h2></Parte>
      <Parte nombre="Bajada" ver={ver}><p className="n-bajada">{c.bajada}</p></Parte>
      <Parte nombre="Lugar, fecha y medio" ver={ver}><p className="n-datos">{c.datos}</p></Parte>
      <Parte nombre="Imagen y pie de foto" ver={ver}>
        <figure className="foto">
          <div className="foto-img" aria-hidden>{c.imagen.emoji}</div>
          <figcaption>{c.imagen.pie}</figcaption>
        </figure>
      </Parte>
      <Parte nombre="Lead o entrada" ver={ver}>
        <p className="n-lead"><span className="pnum">1</span><Rico texto={c.lead} ver={ver} /></p>
      </Parte>
      <Parte nombre="Cuerpo (pirámide invertida)" ver={ver}>
        {c.cuerpo.map((p, i) => (
          <p key={i}><span className="pnum">{i + 2}</span><Rico texto={p} ver={ver} /></p>
        ))}
      </Parte>
    </article>
  );
}

function Reportaje({ c, ver }) {
  let n = 1;
  return (
    <article className="txt txt-reportaje">
      <Parte nombre="Título" ver={ver}><h2 className="r-titulo">{c.titulo}</h2></Parte>
      <Parte nombre="Bajada" ver={ver}><p className="r-bajada">{c.bajada}</p></Parte>
      <p className="r-autor">{c.autor}</p>
      <Parte nombre="Imagen" ver={ver}>
        <figure className="foto foto-ancha">
          <div className="foto-img" aria-hidden>{c.imagen.emoji}</div>
          <figcaption>{c.imagen.pie}</figcaption>
        </figure>
      </Parte>
      <Parte nombre="Entrada o introducción" ver={ver}>
        <p className="r-entrada"><span className="pnum">{n++}</span><Rico texto={c.entrada} ver={ver} /></p>
      </Parte>
      <Parte nombre="Desarrollo con subtítulos" ver={ver}>
        {c.secciones.map((s) => (
          <section key={s.subtitulo} className="r-seccion">
            <h3 className={`r-subtitulo ${ver ? 'subt-on' : ''}`}>{s.subtitulo}</h3>
            {s.parrafos.map((p, i) => (
              <p key={i}><span className="pnum">{n++}</span><Rico texto={p} ver={ver} /></p>
            ))}
          </section>
        ))}
      </Parte>
      <Parte nombre="Cierre" ver={ver}>
        <p className="r-cierre"><span className="pnum">{n++}</span>{c.cierre}</p>
      </Parte>
    </article>
  );
}

function Bloque({ b }) {
  switch (b.tipo) {
    case 'diagrama':
      return (
        <div className="ib ib-diagrama">
          <h4>{b.titulo}</h4>
          <div className="astros">
            {b.orden.map((a, i) => (
              <div key={i} className="astro">
                <span className="astro-ico">{a}</span>
                <span className="astro-lbl">{b.etiquetas[i]}</span>
                {i < b.orden.length - 1 && <span className="astro-rayo" aria-hidden>→</span>}
              </div>
            ))}
          </div>
          <p>{b.texto}</p>
        </div>
      );
    case 'lista':
      return (
        <div className="ib ib-lista">
          <h4>{b.titulo}</h4>
          <ul>
            {b.items.map(([ico, t, d]) => (
              <li key={t}><span className="ib-ico">{ico}</span><span><strong>{t}</strong> {d}</span></li>
            ))}
          </ul>
        </div>
      );
    case 'ficha':
      return (
        <div className="ib ib-ficha">
          <h4>{b.titulo}</h4>
          <dl>
            {b.items.map(([ico, k, v]) => (
              <div key={k}><dt>{ico} {k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>
      );
    case 'timeline':
      return (
        <div className="ib ib-timeline">
          <h4>{b.titulo}</h4>
          <ol>
            {b.items.map(([anio, t]) => (
              <li key={anio}><span className="tl-anio">{anio}</span><span>{t}</span></li>
            ))}
          </ol>
        </div>
      );
    case 'cifra':
      return (
        <div className="ib ib-cifra">
          <span className="cifra-num">{b.numero}</span>
          <span>{b.texto}</span>
        </div>
      );
    case 'barras': {
      const max = Math.max(...b.datos.map((d) => d[1]));
      return (
        <div className="ib ib-barras">
          <h4>{b.titulo}</h4>
          <div className="barras" role="img" aria-label={b.datos.map(([k, v]) => `${k}: ${v}`).join(', ')}>
            {b.datos.map(([k, v]) => (
              <div key={k} className="barra-fila">
                <span className="barra-lbl">{k}</span>
                <span className="barra-track"><span className="barra" style={{ width: `${(v / max) * 100}%` }} /></span>
                <span className="barra-val">{v}</span>
              </div>
            ))}
          </div>
          <small>Cantidad de {b.unidad}</small>
        </div>
      );
    }
    case 'alerta':
    case 'dato':
    default:
      return (
        <div className={`ib ib-${b.tipo}`}>
          <h4><span className="ib-ico">{b.icono}</span> {b.titulo}</h4>
          <p>{b.texto}</p>
        </div>
      );
  }
}

function Infografia({ c, ver }) {
  return (
    <article className={`txt txt-infografia info-${c.tema}`}>
      <header className="info-head">
        <Parte nombre="Título" ver={ver}><h2 className="info-titulo">{c.titulo}</h2><p className="info-sub">{c.subtitulo}</p></Parte>
        <Parte nombre="Bajada" ver={ver}><p className="info-bajada">{c.bajada}</p></Parte>
      </header>
      <Parte nombre="Cuerpo visual (lectura no lineal)" ver={ver}>
        <div className="info-grid">
          {c.bloques.map((b, i) => <Bloque key={i} b={b} />)}
        </div>
      </Parte>
      <Parte nombre="Fuente" ver={ver}><p className="info-fuente">{c.fuente}</p></Parte>
    </article>
  );
}

function Biografia({ c, ver }) {
  return (
    <article className="txt txt-biografia">
      <header className="bio-head">
        <span className="bio-retrato" aria-hidden>{c.retrato}</span>
        <div>
          {c.autobiografia && <span className="chip chip-auto">Autobiografía · 1.ª persona</span>}
          <h2 className="bio-titulo">{c.titulo}</h2>
        </div>
      </header>
      {c.parrafos.map((p, i) => (
        <Parte key={i} nombre={p.parte} ver={ver}>
          <p><span className="pnum">{i + 1}</span><Rico texto={p.texto} ver={ver} /></p>
        </Parte>
      ))}
    </article>
  );
}

export default function TextoRender({ texto, ver }) {
  if (texto.tipo === 'comparacion') return <Comparacion texto={texto} ver={ver} />;
  const C = { noticia: Noticia, reportaje: Reportaje, infografia: Infografia, biografia: Biografia }[texto.tipo];
  return <C c={texto.contenido} ver={ver} />;
}

function Comparacion({ texto, ver }) {
  const [tab, setTab] = useState(0);
  const refs = texto.refs.map(textoPorId);
  return (
    <div className="comparacion">
      <div className="tabs" role="tablist">
        {refs.map((t, i) => (
          <button key={t.id} type="button" role="tab" aria-selected={tab === i} className={`tab ${tab === i ? 'tab-on' : ''}`} onClick={() => setTab(i)}>
            Texto {i + 1}: {TIPOS[t.tipo].icono} {TIPOS[t.tipo].nombre}
          </button>
        ))}
      </div>
      <TextoRender texto={refs[tab]} ver={ver} />
    </div>
  );
}
