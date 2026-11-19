import { fmt } from '../utils';

// Elige una escala "redonda" para el eje vertical.
function escala(max) {
  const pasos = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000];
  const paso = pasos.find((p) => Math.ceil(max / p) <= 20) || 1000;
  return { paso, tope: Math.ceil(max / paso) * paso || paso };
}

// Gráfico de barras dobles (Tomo 2, pp. 126–132): título, ejes, escala y leyenda.
export function BarrasDobles({ g, valores = false }) {
  const W = 560;
  const H = 300;
  const m = { izq: 48, der: 12, arr: 16, aba: 46 };
  const max = Math.max(...g.series.flatMap((s) => s.valores));
  const { paso, tope } = escala(max);
  const alto = H - m.arr - m.aba;
  const ancho = W - m.izq - m.der;
  const grupo = ancho / g.categorias.length;
  const barra = Math.min(34, (grupo * 0.7) / 2);
  const y = (v) => m.arr + alto - (v / tope) * alto;
  const lineas = [];
  for (let v = 0; v <= tope; v += paso) lineas.push(v);
  const cadaCuanto = lineas.length > 11 ? 2 : 1;

  return (
    <figure className="grafico">
      <figcaption className="grafico-titulo">{g.titulo}</figcaption>
      <div className="leyenda">
        {g.series.map((s, i) => (
          <span key={s.nombre}><i className={`serie-${i}`} aria-hidden /> {s.nombre}</span>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Gráfico de barras dobles: ${g.titulo}`}>
        {lineas.map((v, i) => (
          <g key={v}>
            <line x1={m.izq} x2={W - m.der} y1={y(v)} y2={y(v)} className={v === 0 ? 'eje' : 'guia'} />
            {i % cadaCuanto === 0 && (
              <text x={m.izq - 8} y={y(v) + 4} textAnchor="end" className="tick">{fmt(v)}</text>
            )}
          </g>
        ))}
        <line x1={m.izq} x2={m.izq} y1={m.arr} y2={m.arr + alto} className="eje" />
        <text x={14} y={m.arr + alto / 2} transform={`rotate(-90 14 ${m.arr + alto / 2})`} textAnchor="middle" className="eje-txt">{g.ejeY}</text>
        {g.categorias.map((c, ci) => {
          const cx = m.izq + grupo * ci + grupo / 2;
          return (
            <g key={c}>
              {g.series.map((s, si) => {
                const v = s.valores[ci];
                const x = cx - barra + si * barra;
                return (
                  <g key={s.nombre}>
                    <rect x={x + 1} y={y(v)} width={barra - 2} height={y(0) - y(v)} rx={3} className={`serie-${si}`}>
                      <title>{`${c} · ${s.nombre}: ${fmt(v)}`}</title>
                    </rect>
                    {valores && <text x={x + barra / 2} y={y(v) - 4} textAnchor="middle" className="tick">{fmt(v)}</text>}
                  </g>
                );
              })}
              <text x={cx} y={H - m.aba + 18} textAnchor="middle" className="cat">{c}</text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}

export function Tabla({ t }) {
  return (
    <div className="tabla-datos-wrap">
      {t.titulo && <p className="grafico-titulo">{t.titulo}</p>}
      <table className="tabla-datos">
        <thead>
          <tr>{t.cab.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
        </thead>
        <tbody>
          {t.filas.map((f) => (
            <tr key={f[0]}>
              {f.map((v, i) => (i === 0 ? <th key={i} scope="row">{v}</th> : <td key={i}>{typeof v === 'number' ? fmt(v) : v}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Paralelepípedo en perspectiva caballera, con sus medidas.
// `cuadricula` dibuja los cubitos de 1 unidad (para visualizar el volumen).
export function Caja({ l, a, h, u = 'cm', cuadricula = false }) {
  const prof = 0.5;
  const cos = Math.cos(Math.PI / 6);
  const sin = Math.sin(Math.PI / 6);
  const s = Math.min(170 / (l + a * prof * cos), 130 / (h + a * prof * sin));
  const W = l * s;
  const Hh = h * s;
  const dx = a * s * prof * cos;
  const dy = a * s * prof * sin;
  const x0 = 40;
  const y0 = 20 + dy;
  const p = (pts) => pts.map(([x, y]) => `${x},${y}`).join(' ');
  const frente = [[x0, y0], [x0 + W, y0], [x0 + W, y0 + Hh], [x0, y0 + Hh]];
  const arriba = [[x0, y0], [x0 + dx, y0 - dy], [x0 + W + dx, y0 - dy], [x0 + W, y0]];
  const lado = [[x0 + W, y0], [x0 + W + dx, y0 - dy], [x0 + W + dx, y0 + Hh - dy], [x0 + W, y0 + Hh]];
  const vbW = x0 + W + dx + 60;
  const vbH = y0 + Hh + 34;

  const grid = [];
  if (cuadricula && l <= 12 && a <= 12 && h <= 12) {
    for (let i = 1; i < l; i++) {
      grid.push([[x0 + i * s, y0], [x0 + i * s, y0 + Hh]]);
      grid.push([[x0 + i * s, y0], [x0 + i * s + dx, y0 - dy]]);
    }
    for (let j = 1; j < h; j++) {
      grid.push([[x0, y0 + j * s], [x0 + W, y0 + j * s]]);
      grid.push([[x0 + W, y0 + j * s], [x0 + W + dx, y0 + j * s - dy]]);
    }
    for (let k = 1; k < a; k++) {
      const ox = (dx / a) * k;
      const oy = (dy / a) * k;
      grid.push([[x0 + ox, y0 - oy], [x0 + W + ox, y0 - oy]]);
      grid.push([[x0 + W + ox, y0 - oy], [x0 + W + ox, y0 + Hh - oy]]);
    }
  }

  return (
    <svg className="caja" viewBox={`0 0 ${vbW} ${vbH}`} role="img" aria-label={`Paralelepípedo de largo ${fmt(l)} ${u}, ancho ${fmt(a)} ${u} y altura ${fmt(h)} ${u}`}>
      <polygon points={p(arriba)} className="caja-arriba" />
      <polygon points={p(lado)} className="caja-lado" />
      <polygon points={p(frente)} className="caja-frente" />
      {grid.map(([[x1, y1], [x2, y2]], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="caja-grid" />
      ))}
      <text x={x0 + W / 2} y={y0 + Hh + 20} textAnchor="middle" className="caja-medida">{fmt(l)} {u}</text>
      <text x={x0 - 8} y={y0 + Hh / 2 + 4} textAnchor="end" className="caja-medida">{fmt(h)} {u}</text>
      <text x={x0 + W + dx / 2 + 8} y={y0 + Hh - dy / 2 + 14} className="caja-medida">{fmt(a)} {u}</text>
    </svg>
  );
}
