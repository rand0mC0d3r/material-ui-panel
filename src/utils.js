const sides = ['left', 'right']

export const oppositeSide = (side, defaultSide = sides[0]) => side === defaultSide ? sides[1] : sides[0]