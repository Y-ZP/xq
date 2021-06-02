/**
 * image_src--商品图
 * navigator_url--路由
 * floor_title--楼层标题图
 * product_list--楼层标题数据
 * image_width--图片宽度
 */

// 轮播图数据
const Swipers = {
  data: [
    {
      image_src: require('@/assets/8/ab.jpg')
    },
    {
      image_src: require('@/assets/8/ac.jpg')
    },
    {
      image_src: require('@/assets/8/ad.jpg')
    },
    {
      image_src: require('@/assets/8/ae.jpg')
    }
  ],
  meta: { msg: '获取成功', status: 200 }
}
// 导航栏数据
const Navigator = {
  data: [
    {
      name: '校园风景',
      image_src: require('@/assets/8/ea.png'),
      navigator_url: '/#/list'
    },
    {
      name: '成绩查询',
      image_src: require('@/assets/8/eb.png'),
      navigator_url: '/#/index'
    },
    {
      name: '报名招生',
      image_src: require('@/assets/8/ec.png'),
      navigator_url: '/#/index'
    },
    {
      name: '关于本校',
      image_src: require('@/assets/8/ed.png'),
      navigator_url: '/#/index'
    }
  ],
  meta: { msg: '成功进入', status: 200 }
}

// 楼层
const Floors = {
  data: [
    // 标题
    {
      floor_title: {
        name: '校园新闻',
        image_src: require('@/assets/8/be.jpg')
      },
      floor_left: {
        name: '校园新闻',
        image_src: require('@/assets/8/ba.png')
      },
      // 内容区域
      product_list: [
        {
          name: '新闻一',
          image_src: require('@/assets/8/bb.png'),
          image_width: '232'
        },
        {
          name: '新闻二',
          image_src: require('@/assets/8/bc.png'),
          image_width: '233'
        },
        {
          name: '新闻三',
          image_src: require('@/assets/8/bd.png'),
          image_width: '232'
        },
        {
          name: '新闻四',
          image_src: require('@/assets/8/bf.png'),
          image_width: '233'
        }
      ]
    },
    {
      floor_title: {
        name: '开学必备',
        image_src: require('@/assets/8/ca.jpg')
      },
      floor_left: {
        name: '开学必备',
        image_src: require('@/assets/8/cb.jpg')
      },
      // 内容区域
      product_list: [
        {
          name: '必备1',
          image_src: require('@/assets/8/cc.jpg'),
          image_width: '232'
        },
        {
          name: '必备3',
          image_src: require('@/assets/8/cd.jpg'),
          image_width: '233'
        },
        {
          name: '必备3',
          image_src: require('@/assets/8/ce.jpg'),
          image_width: '232'
        },
        {
          name: '必备4',
          image_src: require('@/assets/8/cf.jpg'),
          image_width: '233'
        }
      ]
    }

  ],
  meta: { msg: '获取成功', status: 200 }
}

module.exports = { Swipers, Navigator, Floors }
