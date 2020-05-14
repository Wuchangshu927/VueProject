import Mock from 'mockjs';
import guan from './guan.js';
import baseurl from '../plugins/baseUrl'
Mock.mock(baseurl+'/api/his/home',guan.home);
Mock.mock(baseurl+'/getAllCard',guan.getAllCard);
Mock.mock(baseurl+'/users/usersData',guan.getUserData);
Mock.mock(baseurl+'/tableData',guan.tableData);
Mock.mock(baseurl+'/rankdata',guan.mockData);
Mock.mock(baseurl+'/users/login',guan.login());
export default Mock;
