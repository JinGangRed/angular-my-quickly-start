# angular快速开始项目（自定义）
项目基于[Angular CLI](https://github.com/angular/angular-cli) version 1.4.7.   
可以直接下载使用，参照app/first-demo的实现，用于快速搭建一个基础的、带特性路由的项目。
## 项目框架介绍
1.  目录介绍
  * app目录存放该项目的主要内容
    * app-assets存放项目共享模块和核心模块。
      * 项目的欢迎页(welcome-page)
      * 项目的PageNotFound页(page-not-found)
      * 核心模块(core.module)
      * 共享模块(share.module)
    * first-demo存放该项目的一个示例的组件
      * first-demo.module子模块
      * first-demo-routing子模块路由
      * guide示例组件
    * app组件(app.component、app.module、app.routing.module)
2.  使用介绍
  * 创建子模块
    1) 创建子模块文件夹（first-demo）
    2) 创建子模块module(first-demo.module和first-demo-routing.module)
    3) 在子模块文件夹中创建组件(guide)
  * 设置特性路由
    1) 在子模块的路由模块中(first-demo-routing.module),创建路由
        `const first_demo_routes: Routes = [
           {
             path: '',
             component: GuideComponent
           }
         ];`
    2) 在子模块路由模块中, 
        `@NgModule({
           imports: [
             RouterModule.forChild(first_demo_routes),
           ],
           exports: [
             RouterModule
           ],
           declarations: []
         })`
    3) 在App-routing.module中添加特性路由
        `{
             path: 'first',
             loadChildren: './first-demo/first-demo.module#FirstDemoModule'
           },`
### 更新日志介绍
1.  新增Http拦截器base-http-interceptor.service，主要是增加http请求的头部信息
    > (更新内容)[https://github.com/JinGangRed/angular-my-quickly-start/commit/5ae24cf2a3f77b3dec91728594263fa92678a55c]：
    1) 添加services/base-http-interceptor.service(拦截器)、services/base-first-demo.service(一个示例http请求的Service)
    2) 修改app/app-assets/core.module,导入HttpClientModule
    3) 修改app/app.module,增加providers
    > 更新日期：2018.1.7
## 项目使用介绍
  可直接下载该快速启动项目,在此基础上按照使用介绍进行扩展
## 个人信息
     邮箱：15950590137@163.com  
     博客园：[畅想技术](http://www.cnblogs.com/kingkangstudy/)
  
