export function calculateExperience(startDate: string): {
  pt: string;
  en: string;
} {
  const start = new Date(startDate);
  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();
  let months = today.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearsPt = years > 0 ? `${years} ano${years > 1 ? "s" : ""}` : "";
  const yearsEn = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";

  const monthsPt = months > 0 ? `${months} mês${months > 1 ? "es" : ""}` : "";
  const monthsEn = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

  const pt = [yearsPt, monthsPt].filter(Boolean).join(" e ");
  const en = [yearsEn, monthsEn].filter(Boolean).join(" and ");

  return { pt, en };
}
