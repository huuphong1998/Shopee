## Tại sao càn đồng bộ filter lên URL

-   Chúng ta hoàn toàn có thể filter sản phẩm trên website của chúng ta mà url không hề thay đổi. Nhưng điều này chỉ xảy ra trên máy tính chúng ta, nếu chúng ta refresh lại trang web sẽ bị mất hoàn toàn filter

-   Hoặc đơn giản nếu chúng ta gửi URL cho 1 người khác thi họ không thấy được những gì mà máy chúng ta đang filter được

-   Vì thế cần đồng bộ filter lên trên URL, khi URL thay đổi thì filter cũng thay đổi

## Thuật toán

1. Page `Home` sẽ lưu giữ state `filters` và tracking sự thay đổi của URL. Nếu URL thay đổi thì cập nhật lại state `filters` và gọi lại API get products

2. State `filters` sẽ đưuọc truyền xuống các component con như `SearchItemResult` hay `FilterPanel` để các component tiện việc xử lý điều hướng

3. Khi thực hiện hành động filter thì chỉ cần chuyển route với `history.push()` hoặc `Link`. Lúc này page `Home` sẽ tracking được URL thay đổi và thực hiện cập nhật lại products và filters

Ví dụ 1 URL : `http://localhost:3000?limit=30&page=1&rating=3&sortBy=view`

Lúc này filters sẽ là

```js
const filters = {
    limit: 30,
    page: 1,
    sortBy: 'view',
    rating: 30
}
```
