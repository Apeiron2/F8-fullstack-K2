# Hook useReducer

-useState -> Logic nằm ở eventHandler
=> Tách logic update State
=> Dùng để quản lý state phức tạp

```js
const reducer = (prev, current) => {
  //Xử lý logic update state -> Return về State mới
};
const [state, dispatch] = useReducer(reducer, initialState);
```

- Dispatch
  - Là 1 hàm khá giống setState
  - Khi hàm dispatch được gọi đẩy dữ liệu lên reducer (tham số current)
- Action
  - Là 1 object
  - Mô tả hành động
    ```js
    {
        type:"tên action",
        payload:"dữ liệu muốn gửi lên Reducer"
    }
    ```
