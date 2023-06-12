const DOUBLE_AT = / @@ /g
const SINGLE_AT = / @ /g

const NO_BREAK_SPACE = "\u00a0"
const NARROW_NO_BREAK_SPACE = "\u202f"

export default (s = "") => 
  s.replace(DOUBLE_AT, NO_BREAK_SPACE).replace(SINGLE_AT, NARROW_NO_BREAK_SPACE)
