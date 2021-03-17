import { Role } from 'testcafe'
import LoginPage from './LoginPage'
import { CREDENTIALS } from '../data/Constants'

const url = 'https://www.saucedemo.com/';

const normalAccUser = Role (url, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD )
});

const thirdAccUser = Role (url, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME3, CREDENTIALS.VALID_USER.PASSWORD )
});

const fourthAccUser = Role (url, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME4, CREDENTIALS.VALID_USER.PASSWORD )
});