// 导入页面路由模块
import { router } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';



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
          console.info(`Succeeded in clicking the 'Next' button.`)
          // 跳转到第二页
          router.pushUrl({ url: 'pages/Second' }).then(() => {
            console.info('Succeeded in jumping to the second page.')

          }).catch((err: BusinessError) => {
            console.error(`Failed to jump to the second page. Code is ${err.code}, message is ${err.message}`)
          })
        }).width("100%").height("100")

        Divider() // 分割

        Image("https://www.baidu.com/img/flexible/logo/pc/result@2.png")
          .width("100%").height("100")

        Divider() // 分割

        Button("点击222").onClick(() => { // 点击按钮时间
           
        }).width("100%").height("100")


      }.width("100%")
    }.height("100%")
  }
}