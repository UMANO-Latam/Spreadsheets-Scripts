/**
 * Valida un RUT chileno.
 *
 * @param {string} rut El RUT a validar (ej: "27115149-7")
 * @return {string} "Válido" o "Inválido"
 * @customfunction
 */
function esRUTValido(rut) {
  if (!rut) return "Inválido";

  // Elimina puntos, guiones y espacios
  const limpio = rut.toString().replace(/[^0-9kK]/g, "").toUpperCase();
  const cuerpo = limpio.slice(0, -1);
  const dvIngresado = limpio.slice(-1);

  if (!/^\d+$/.test(cuerpo)) return "Inválido";

  let suma = 0;
  let multiplo = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo.charAt(i)) * multiplo;
    multiplo = multiplo === 7 ? 2 : multiplo + 1;
  }

  const resto = 11 - (suma % 11);
  let dvCalculado = resto === 11 ? "0" : resto === 10 ? "K" : resto.toString();

  return dvCalculado === dvIngresado ? "Válido" : "Inválido";
}
