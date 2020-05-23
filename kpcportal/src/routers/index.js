import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import moment from 'moment';
import CryptoJS from 'crypto-js';
const WebContainer = () => import('../components/containers/WebContainer');
const AdminContainer = () => import('../components/containers/AdminContainer');
const PageHome = () => import('../components/views/pages/Home');
const PageCapital = () => import('../components/views/pages/Capital');
const PageCapitalSector = () => import('../components/views/pages/CapitalSector');
const PageDistrict = () => import('../components/views/pages/District');
const PageCommune = () => import('../components/views/pages/Commune');
const PageSearch = () => import('../components/views/pages/Search');
const PageLogin = () => import('../components/views/pages/Login');
const PageAdminDashboard = () => import('../components/views/admins/Dashboard.vue');
const PageAdminEmployee = () => import('../components/views/admins/Employee.vue');
const PageAdminEmployeeForm = () => import('../components/views/admins/EmployeeForm.vue');
const PageAdminCompanyForm = () => import('../components/views/admins/CompanyForm.vue');

function configRoutes() {
    return [
        {
            path: '/admin',
            component: AdminContainer,
            children: [
                {
                    path: '',
                    name: 'dashbaord',
                    component: PageAdminDashboard,
                    meta: {
                        title: 'Admin Dashboard',
                        aurequiresAuthth: true,
                    }
                },
                {
                    path: 'employee',
                    component: PageAdminEmployee,
                    meta: {
                        title: 'តារាងបញ្ជីឈ្មោះនិយោជិក',
                        requiresAuth: true
                    }
                },
                {
                    path: 'employee/create',
                    component: PageAdminEmployeeForm,
                    meta: {
                        title: 'បង្កើតបុគ្គលិកថ្មី',
                        requiresAuth: true
                    }
                },
                {
                    path: 'employee/edit/:id',
                    name: 'edit_employee',
                    component: PageAdminEmployeeForm,
                    meta: {
                        title: 'កែប្រែព័ត៌មានបុគ្គលិក',
                        requiresAuth: true
                    }
                },
                {
                    path: 'company',
                    component: PageAdminCompanyForm,
                    meta: {
                        title: 'ព័ត៌មានក្រុមហ៊ុន',
                        requiresAuth: true
                    }
                }
            ]
        },
        {
            path: '/',
            component: WebContainer,
            children: [
                {
                    path: '',
                    component: PageHome,
                    meta: {
                        title: 'ទំព័រដើម',
                        requiresAuth: false
                    }
                },
                {
                    path: 'price/capital/:id',
                    name: 'capital_detail',
                    component: PageCapitalSector,
                    meta: {
                        title: 'តម្លៃសេវាថ្នាក់រាជធានី-ខេត្ត',
                        requiresAuth: false
                    }
                },
                {
                    path: 'price/district/:id',
                    name: 'district_detail',
                    component: PageCapitalSector,
                    meta: {
                        title: 'តម្លៃសេវាថ្នាក់ក្រុងស្រុកខណ្ឌ',
                        requiresAuth: false
                    }
                },
                {
                    path: 'price/commune/:id',
                    name: 'commune_detail',
                    component: PageCapitalSector,
                    meta: {
                        title: 'តម្លៃសេវាថ្នាក់ឃុំសង្កាត់',
                        requiresAuth: false
                    }
                },
                {
                    path: 'price/capital',
                    component: PageCapital,
                    meta: {
                        title: 'តម្លៃសេវាថ្នាក់រាជធានី-ខេត្ត',
                        requiresAuth: false
                    }
                },
                {
                    path: 'price/district',
                    component: PageDistrict,
                    meta: {
                        title: 'តម្លៃសេវាថ្នាក់ក្រុង-ស្រុក-ខណ្ឌ',
                        requiresAuth: false
                    }
                },
                {
                    path: 'price/commune',
                    component: PageCommune,
                    meta: {
                        title: 'តម្លៃសេវាថ្នាក់ឃុំ-សង្កាត់',
                        requiresAuth: false
                    }
                },
                {
                    path: 'search',
                    component: PageSearch,
                    meta: {
                        title: 'ពិនិត្យដំណើរការឯកសារ',
                        requiresAuth: false
                    }
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: PageLogin,
            meta: {
                title: 'Login',
                requiresAuth: false
            }
        }
    ]
}
const router = new Router({
    mode: 'history',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth == false) {
        next();
    } else {
        if (sessionStorage.getItem('jwt') == null) {
            next('/login');
        } else {
            var expire = CryptoJS.AES.decrypt(sessionStorage.getItem('jwt@exp'),'jwtaccess').toString(CryptoJS.enc.Utf8);
            if(expire == null || (expire != null && moment(expire).valueOf() < moment().valueOf())){
                next('/login');
            }else{
                next();
            }
        }
    }
    document.title = (to.meta.title != undefined?to.meta.title.toUpperCase():'');
    next();
});

export default router;