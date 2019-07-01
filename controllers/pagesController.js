// 专门用来返回页面
// 引入fs
const fs = require('fs')

// 读取前台页面
module.exports.getIndexPage = (req,res)=>{
    res.render('index.ejs')
}
module.exports.getListPage = (req,res)=>{
    res.render('list.ejs')
}
module.exports.getDetailPage = (req,res)=>{
    res.render('detail.ejs')
}

// 读取后台页面 
module.exports.getAdminPage = (req,res)=>{
    res.render('admin/index.ejs')
}
module.exports.getioginPage = (req,res)=>{
    res.render('admin/login.ejs')
}
module.exports.getcategoriesPage = (req,res)=>{
    res.render('admin/categories.ejs')
}
module.exports.getcommentsPage = (req,res)=>{
    res.render('admin/comments.ejs')
}
module.exports.getindexPage = (req,res)=>{
    res.render('admin/index.ejs')
}
module.exports.getnavmenusPage = (req,res)=>{
    res.render('admin/nav-menus.ejs')
}
module.exports.getpasswordresetPage = (req,res)=>{
    res.render('admin/password-reset.ejs')
}
module.exports.getpostaddPage = (req,res)=>{
    res.render('admin/post-add.ejs')
}
module.exports.getpostsPage = (req,res)=>{
    res.render('admin/posts.ejs')
}
module.exports.getprofilePage = (req,res)=>{
    res.render('admin/profile.ejs')
}
module.exports.getsettingsPage = (req,res)=>{
    res.render('admin/settings.ejs')
}
module.exports.getslidesPage= (req,res)=>{
    res.render('admin/slides.ejs')
}
module.exports.getusersPage= (req,res)=>{
    res.render('admin/users.ejs')
}
// module.exports.getAdminPage = (req,res)=>{
//     res.render('admin/detail.ejs')
// }
