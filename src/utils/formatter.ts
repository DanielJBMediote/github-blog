import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formattToNow = (date: Date) => {
  return formatDistanceToNow(date, { addSuffix: true, locale: ptBR })
}

export function sliceText(text: string, number: number): string {

  text = text.replace(/#/g, "")
  return text.slice(0, number).concat("...");
}