const _module = (() => { let e = [], t = [], r = ["D", "H", "S", "C"], a = ["A", "J", "Q", "K"], l = document.querySelector("#btnNuevoJuego"), d = document.querySelector("#btnPedirCarta"), n = document.querySelector("#btnDetener"), o = document.querySelectorAll(".divCartas"), i = document.querySelectorAll("small"), s = (r = 2) => { t = []; for (let a = 0; a < r; a++)t.push(0); e = c(), i.forEach(e => e.innerHTML = 0), o.forEach(e => e.innerHTML = ""), d.disabled = !1, n.disabled = !1 }, c = () => { e = []; for (let t = 2; t <= 10; t++)for (let l of r) e.push(t + l); for (let d of r) for (let n of a) e.push(n + d); return _.shuffle(e) }, u = () => { if (0 === e.length) throw "No hay cartas"; return e.pop() }, $ = e => { let t = e.substring(0, e.length - 1); return isNaN(t) ? "A" === t ? 11 : 10 : 1 * t }, f = (e, r) => (t[e] += $(r), i[e].innerText = t[e], t[e]), h = (e, t) => { let r = document.createElement("img"); r.src = `assets/${t}.png`, r.classList.add("carta"), o[e].append(r) }, b = () => { let [e, r] = t; setTimeout(() => { r === e ? alert("Nadie Gana") : e > 21 ? alert("Computadora Gano") : r > 21 ? alert("Jugador Gana") : alert("Computadora Gana") }, 100) }, p = e => { let r = 0; do { let a = u(); r = f(t.length - 1, a), h(t.length - 1, a) } while (r < e && e <= 21); b() }; return d.addEventListener("click", () => { let e = u(), t = f(0, e); h(0, e), t > 21 ? (console.warn("Lo siento pero perdiste"), d.disabled = !0, n.disabled = !0, p(t)) : 21 === t && (alert("Felicidades! Has ganado!"), d.disabled = !0, n.disabled = !0, p(t)) }), n.addEventListener("click", () => { d.disabled = !0, n.disabled = !0, p(t[0]) }), l.addEventListener("click", () => { s() }), { iniciarJuego: s } })();