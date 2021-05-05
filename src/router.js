import Dashboard from '../src/pages/Dashboard';
import Account from '../src/pages/Account';


export const navRouter = [
    {
        name: 'forms',
        icon: 'home',   // box-icon name 
        path: '/forms',
        component: Dashboard
    },
    {
        name: 'Account',
        icon: 'cog',   // box-icon name 
        path: '/account',
        component: Account,
        subMenu: [
            {
                name: 'Submenu',
                icon: 'category',   // box-icon name 
                path: '/account/submenu1',
                component: Account
            },
            {
                name: 'Submenu 2',
                icon: 'repeat',   // box-icon name 
                path: '/account/account2',
                component: Account
            }
        ]
    },
    {
        name: 'Setting',
        icon: 'cog',   // box-icon name 
        path: '/setting',
        component: Account,
        subMenu: [
            {
                name: 'SubSetting1',
                icon: 'shield-x',   // box-icon name 
                path: '/setting/subsetting1',
                component: Account
            },
            {
                name: 'SubSetting2',
                icon: 'hive',   // box-icon name 
                path: '/setting/subsetting2',
                component: Account
            }
        ]
    }
]
