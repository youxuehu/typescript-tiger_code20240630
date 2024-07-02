@Entry
@Component
struct Index {
  @State message: string = '要学会';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)

        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)

        Divider() // 分割

        Button("点击").onClick(() => { // 点击按钮时间
          this.message = "jack"
        }).width("100%").height("100")
        Divider() // 分割
        Image("https://www.baidu.com/img/flexible/logo/pc/result@2.png")
          .width("100%").height("100")
      }.width("100%")
    }.height("100%")
  }
}