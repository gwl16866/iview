import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
 
  {
    path: '/components/sysmanagement',
    name: 'sysmanagement',
    meta: {
      icon: 'logo-buffer',
      title: '系统管理'
    },
    component: Main,
    children: [
      {
        path: 'user',
        name: 'user',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '用户管理'
        },
        component: () => import('@/view/components/sysmanagement/user/user.vue')
      },
      {
        path: 'role',
        name: 'role',
        meta: {
          icon: 'md-trending-up',
          title: '角色管理'
        },
        component: () => import('@/view/components/sysmanagement/role/role.vue')
      },
      {
        path: 'rolePerms',
        name: 'rolePerms',
        meta: {
          icon: 'ios-infinite',
          title: '角色权限'
        },
        component: () => import('@/view/components/sysmanagement/role/rolePermission.vue')
      }
    ]
  },
  {
    path: '/components/product',
    name: 'product',
    meta: {
      icon: 'md-cloud-upload',
      title: '商品'
    },
    component: Main,
    children: [
      {
        path: 'productList',
        name: 'productList',
        meta: {
          icon: 'ios-document',
          title: '商品列表'
        },
        component: () => import('@/view/components/product/product/product.vue')
      },
      {
        path: 'addProduct',
        name: 'addProduct',
        meta: {
          icon: 'md-clipboard',
          title: '添加商品'
        },
        component: () => import('@/view/components/product/addProduct/addProduct.vue')
      }, {
        path: 'productShenHe',
        name: 'productShenHe',
        meta: {
          icon: 'md-clipboard',
          title: '商品审核'
        },
        component: () => import('@/view/components/product/shenhe/productShenHe.vue')
      }, {
        path: 'productModel',
        name: 'productModel',
        meta: {
          icon: 'md-clipboard',
          title: '规格参数'
        },
        component: () => import('@/view/components/product/productModel/productModel.vue')
      }
    ]
  },
  {
    path: '/components/order',
    name: 'order',
    meta: {
      icon: 'ios-stats',
      title: '订单'
    },
    component: Main,
    children: [
      {
        path: 'orderList',
        name: 'orderList',
        meta: {
          icon: 'md-add',
          title: '订单列表'
        },
        component: () => import('@/view/components/order/orderList/orderList.vue')
      },
      {
        path: 'returnProduct',
        name: 'returnProduct',
        meta: {
          icon: 'md-download',
          title: '退货申请处理'
        },
        component: () => import('@/view/components/order/returnProduct/returnProduct.vue')
      },
      {
        path: 'returnMoney',
        name: 'returnMoney',
        meta: {
          icon: 'md-download',
          title: '退款申请处理'
        },
        component: () => import('@/view/components/order/returnMoney/returnMoney.vue')
      },
      {
        path: 'returnProductReason',
        name: 'returnProductReason',
        meta: {
          icon: 'md-download',
          title: '退货原因设置'
        },
        component: () => import('@/view/components/order/returnProductReason/returnProductReason.vue')
      }
    ]
  },
   {
    path: '/components/customer',
    name: 'customer',
    meta: {
      icon: 'ios-stats',
      title: '客户管理'
    },
    component: Main,
    children: [
      {
        path: 'customerList',
        name: 'customerList',
        meta: {
          icon: 'md-add',
          title: '客户列表'
        },
        component: () => import('@/view/components/customer/customerList/customer.vue')
      },   {
        path: 'customerAdd',
        name: 'customerAdd',
        meta: {
          icon: 'md-add',
          title: '添加客户'
        },
        component: () => import('@/view/components/customer/addCustomer/add.vue')
      }
    ]
  }, {
    path: '/components/statistics',
    name: 'statistics',
    meta: {
      icon: 'ios-stats',
      title: '统计'
    },
    component: Main,
    children: [
      {
        path: 'productStatistics',
        name: 'productStatistics',
        meta: {
          icon: 'md-add',
          title: '商品统计'
        },
        component: () => import('@/view/components/statistics/productStatistics/productStatistics.vue')
      },
      {
        path: 'customerStatistics',
        name: 'customerStatistics',
        meta: {
          icon: 'md-download',
          title: '会员统计'
        },
        component: () => import('@/view/components/statistics/customerStatistics/customerStatistics.vue')
      },
      {
        path: 'payStatistics',
        name: 'payStatistics',
        meta: {
          icon: 'md-download',
          title: '交易统计'
        },
        component: () => import('@/view/components/statistics/payStatistics/payStatistics.vue')
      }
    ]
  }
]
