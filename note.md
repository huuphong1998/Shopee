### Guard

-   Nhiệm vụ giúp ngăn chặn người dùng truy cập vào route (page) nếu không được phép. Ví dụ admin, user hoặc đơn giản hơn là login và chưa login

    Ví dụ:

-   Chưa đăng nhập: Có thể truy cập vào trang login, register, home nhưng không thể truy cập vào user => tạo AuthenticatedGuard để bảo vệ cho user
-   Đã đăng nhập: Có thể truy cập vào user nhưng không thể truy cập vào login, register trừ khi họ logout => tạo UnauthenticatedGuard để bảo vệ cho login, register

### Lưu ý khi làm việc với Redux - Redux Toolkit

-   Các data dùng chung ở nhiều component khác nhau, nhiều page khác nhau thì nên lưu ở redux
-   Các data chỉ dùng ở 1 chỗ thì nên lưu ở component

-   Khi get api thì nên thông qua `createAsyncThunk` để có được những action như `.../fulfilled` hoặc `.../rejected` để dễ dàng tracking sử dụng cho sau này cho các tính năng như loading
-   Không cần thiết phải xử lý mọi action mà `createAsyncThunk` trả về, chỉ xử lý những cái cần dùng. Cũng như không cần thiết phải lưu hết mội thứ vào redux

### Xử lý url

-   Đôi khi những ký tự đặc biệt như `/` không nên xuất hiện trên url bởi vì nó sẽ ảnh hưởng tới route làm sai đường dẫn vậy nên chúng ta sẽ dùng một function có sẵn trong javascript để mã hóa string đó là `encodeURIComponent`

### Code chức năng slide cho trang productDetail

-   Api mình trả về 8 image thì mình render [1, 5] tức là 5 image. Khi mình click prev thì mình sẽ render lại từ [0, 4] như vậy công việc của mình sẽ thay đổi cái index là nó sẽ render theo như ý muốn của chúng ta --> tạo ra state currentIndexImages
-   Khi mình hover vào thì image tương ứng sẽ show lên --> tạo ra state currentImage

### Render HTML an toàn trong React

-   Dùng thuộc tính dangerouslySetInnerHTML truyền vào một object. Nhưng mà khi dùng vậy thì mình sẽ bị lỗ hỏng XSS, lỡ như đoạn HTML đó có chèn thẻ script và trong thẻ script đó người ta chèn những đoạn javascript vào và khi chúng ta render đoạn HTML đó thì vô tình chúng ta cũng chạy cái đoạn javascript đó, như vậy sẽ rất là nguy hiểm nếu như đoạn javascript đó nó lấy token của chúng ta, lấy những thông tin trên web của chúng ta và nó gửi vào server của nó như vậy thì chúng ta đã bị lộ thông tin nên chúng ta phải lọc cho sạch những đoạn javascript đó và để lọc những đoạn javascript đó thì chúng ta dùng thư viện DOMPurify

```js
dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(Đoạn HTML)
}}
```

### Xử lý unauthorized

-   Khi token hết hạn hoặc không gửi token => Server trả về status 401
-   Chúng ta sẽ tracking mỗi status server trả về. Nếu là 401 thì sẽ dispatch một action unauthorize
-   Chúng ta cần tìm một component để tracking status này, nơi component luôn tồn tại xuyên suốt app của chúng ta => App component

### Phân tích thuật toán

# State của cart

-   `purchases = []`
-   Mỗi purchases ngoài việc nắm giữ thông tin từ api trả về, chúng còn nắm giữ thuộc tính `disabled` và `checked`
-   Vì thế mình sẽ tạo một state mới là `localPurchases` với các `purchase` được add thuộc tính `disabled` và `checked` vào. Và mình sẽ dùng `createNextState` (tương tự `produce` của `immer`) để thực hiện để tránh mutate state `purchases`

# BaseInputNumber

-   Nhận thấy khi out focus khỏi input thì sẽ gọi 1 sự kiện => thêm prop `onBlur` vào

# ProductQuantityController

-   Nhận thấy rằng khi gọi api khi out focus khỏi input hoặc nhấn button tăng/giảm
-   Nếu chỉ dùng `onChange` thì mỗi khi gõ phím sẽ thực hiện gọi api => không nên => không dùng prop `onChange` được trong trường hợp này => đổi thành `onInput, onIncrease, onDecrease, onBlur`
-   Khi gõ phím thì sẽ gọi `onInput` và `onInput` của chúng ta chỉ cập nhật lại value chứ không gọi api
-   Khi mất focus khỏi input thì sẽ gọi `onBlur` và `onBlur` của chúng ta sẽ gọi api
-   Khi nhấn button `increase` thì sẽ gọi `onIncrease` và `onIncrease` sẽ gọi api
-   Khi nhấn button `increase` thì sẽ gọi `onDecrease` và `onDecrease` sẽ gọi api

### Nhiệm vụ của keyBy trong lodash

-   Chuyển một array thành một object dựa vào key chúng ta cung cấp

### react-helmet-async-Async(lib)

-   Giúp chúng ta thay đổi thay đổi title, thẻ meta, thẻ link
