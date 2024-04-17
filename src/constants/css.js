import { colorPalettes } from "./colors"

const { colorSet1: { softWhite, softGray, darkViolet, lightOrange, darkOrange, charcoal, lightDark } } = colorPalettes

export const defaultInput = {
    backgroundColor: charcoal,
    borderRadius: 5,
    paddingVertical: 5,
    width: 200,
    alignSelf: 'flex-end',
    paddingHorizontal: 8,
}

export const customSafeAreaView = {
    height: 200,
    width: '100%', position: 'absolute',
    paddingTop: 50,
    padding: 10, flexDirection: 'row',
    gap: 5, justifyContent: 'start'
}

export const linklbl = { color: 'blue', fontWeight: '700' }
export const justifyCenter = { justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }
export const roundedFull = { width: 50, height: 50, borderRadius: 9999 }
export const imageCircle = { width: 50, height: 50, borderRadius: 9999, backgroundColor: charcoal }

export const titleScreen = { fontSize: 24, fontWeight: 700 }
export const h2Bold = { fontSize: 22, fontWeight: 700 }
export const h2Light = { fontSize: 22, fontWeight: 600 }
export const h3Bold = { fontSize: 20, fontWeight: 700 }
export const h3Light = { fontSize: 20, fontWeight: 600 }
export const h4Bold = { fontSize: 18, fontWeight: 700 }
export const h4Light = { fontSize: 18, fontWeight: 600 }
export const h5Bold = { fontSize: 16, fontWeight: 700 }
export const h5Light = { fontSize: 16, fontWeight: 600 }
export const smallTextGray = { fontSize: 12, fontWeight: 500, color: softGray }
export const smallText = { fontSize: 12, fontWeight: 500 }

