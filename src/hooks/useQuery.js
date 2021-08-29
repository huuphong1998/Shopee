import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'query-string'

export default function useQuery() {
    const location = useLocation()
    const queryString = useMemo(() => qs.parse(location.search), [location.search])

    return queryString
}
// Khi location thay đổi thì ta phải tính toán lại query
// Vậy ở đây có thể dùng state là queryString và useEffect với dependence là location, mỗi lần location thay đổi ta
// setState lại queryString
// Nếu không dùng hook thì các useQuery không còn là custom hook nữa, nó sẽ trở thành 1 function mà khi component re-render
// nó sẽ bị tính toán lại
