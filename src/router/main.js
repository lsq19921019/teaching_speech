
import index from '../pages/index';
import detail from '../pages/detail';
import calendar from '../pages/calendars';

export default [
    {
        path: '/index/:sourceCode?',
        name: 'Index',      
        component: index,
        meta : {
            title : '首页',
            //keepAlive: true,  //返回不刷新
        }
    },
    {
        path: '/detail/:sourceCode?',
        name: 'detail',      
        component: detail,
        meta : {
            title : '详情',
            //keepAlive: true,  //返回不刷新
        }
    },
    {
        path: '/calendar/:sourceCode?',
        name: 'calendar',      
        component: calendar,
        meta : {
            title : '日历',
            //keepAlive: true,  //返回不刷新
        }
    }
];
