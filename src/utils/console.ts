const COLORS = {
  yellow: "\x1b[33m%s\x1b[0m",
  blue: "\x1b[34m%s\x1b[0m",
}

export const newline = () => console.log()

export function title(title: string): void {
  let hyphens = ""

  for (let i = 0; i < title.length; i++) {
    hyphens += "-"
  }

  console.log(hyphens)
  console.log(COLORS.yellow, title)
  console.log(hyphens)
}

export function paragraph(p: string): void {
  console.log(COLORS.blue, p)
}
