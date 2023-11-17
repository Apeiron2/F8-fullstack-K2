# Higher Order Component

    Component cấp cao hơn bọc component hiện tại --> React.memo()
    Component sẽ thay đổi dựa vào Props

# Buil HOC

    Nhận vào 1 component
    Trả về 1 component mới

# useRef

    Khá giống state, không bị reset dữ liệu khi re-render
    Khi Ref bị thay đổi thì component sẽ không re-render, Ref thay đổi giá trị ngay sau khi thay đổi, Ref có thể tham chiếu tới 1 element của React để trả về 1 DOM Element

# forwardRef (HOC)

    Chuyển tiếp ref để ref
    ```js
        import {forwardRef} from "react";
        const Button=(props,ref)=>{
            return <button ref={ref}>Click me</button>
        }
        export default forwardRef(Button)
    ```

# useEffect

    1. State thay đổi
    2. Re-render
    3. UI Update
    4. Cleanup
    5. Callback

# useLayoutEffect

    1. State thay đổi
    2. Re-render
    3. Cleanup
    4. Callback
    5. UI Update

# useMemo

    Cache logic tính toán --> Trả về 1 giá trị
    callBack trong useMemo phải có return

useMemo(callBack,des) --> des như useEffect [a] -> khi a thay đổi thì chạy callBack
Cơ chế là nếu a không thay đổi thì useMemo sẽ lấy giá trị cũ

# useCallBack

    tương tự useMemo nhưng cache function

# useTransition

    Chặn các thay đổi khi render quá lâu ( Kiểu render xong thì mới thay đổi )
    --> UI bị block trong quá trình Render
