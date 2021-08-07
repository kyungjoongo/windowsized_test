import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
} from '@react-hook/window-size/throttled'

export const App = (props) => {
    const [width, height] = useWindowSize()
    const onlyWidth = useWindowWidth()
    const onlyHeight = useWindowHeight()

    const isMobile2 = () => (width < 580 ? true : false)

    return (
        <div>
            sdlkflsdkflksdlfkds

            {onlyWidth}
        </div>
    )
}
