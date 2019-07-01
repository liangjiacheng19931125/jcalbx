// 引入users表的控制器模块
const pagesController = require('../controllers/pagesController')
// 封装路由模块
const express = require('express')
// Router()构造函数创建的路由对象可以当成一个中间件来使用
const router = express.Router()

// router.get('/',(req,res) => {
//     pagesController.getIndexPage(req,res)
// })

// 当监听到Get方式的/请求的时候，会调用函数进行处理，并且为传递传递两个参数：req,res
// 这两个参数是服务器传递的，不是你一开始就有的

// 前台页面
router.get('/',pagesController.getIndexPage)
      .get('/list',pagesController.getListPage)
      .get('/detail',pagesController.getDetailPage)

// 后台管理页面，统一添加admin做为前缀
      .get('/admin',pagesController.getAdminPage)
      .get('/admin/login',pagesController.getioginPage)
      .get('/admin/categories',pagesController.getcategoriesPage)
      .get('/admin/comments',pagesController.getcommentsPage)
      .get('/admin/index',pagesController.getindexPage)
      .get('/admin/nav-menus',pagesController.getnavmenusPage)
      .get('/admin/password-reset',pagesController.getpasswordresetPage)
      .get('/admin/post-add',pagesController.getpostaddPage)
      .get('/admin/posts',pagesController.getpostsPage)
      .get('/admin/profile',pagesController.getprofilePage)
      .get('/admin/settings',pagesController.getsettingsPage)
      .get('/admin/slides',pagesController.getslidesPage)
      .get('/admin/users',pagesController.getusersPage)
      
















// 暴露路由模块
module.exports = router