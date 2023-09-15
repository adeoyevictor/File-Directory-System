export const isFile = (fileSrc: string) => fileSrc.includes(".pdf") || fileSrc.includes(".xlsx")

export const isPdf = (fileSrc: string) => fileSrc.includes(".pdf")

export const isExcel = (fileSrc: string) => fileSrc.includes(".xlsx")