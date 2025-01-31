import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const  URL_UI = 'https://realworld.qa.guru/';
/* Это пример использования let todo удалить
let urlUi;
urlUi = 'www';
*/

function getUsername() {
    return faker.person.firstName();
}

const getEmail = function() {
    return faker.internet.email();
}

// стрелочная функция
const getPassword = () => {
    return faker.internet.password({ length: 10 });
}

// const getSomeFun = () => faker.internet.password();

test('AUTH', async ({ page }) => {
  //const FIRSTNAME = faker.person.firstName();
  //const EMAIL = faker.internet.email();
  const FIRSTNAME = getUsername();
  //const PASSWORD = faker.internet.password();
  await page.goto(URL_UI);
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByPlaceholder('Your Name').click();
  await page.getByPlaceholder('Your Name').fill(FIRSTNAME);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(getEmail());
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(getPassword());
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole('navigation')).toContainText(FIRSTNAME);
});

test('demo_on_lesson', async ({page}) => {
    let demoEnv = 5;
    function getSomething(params) {
        params = params + 1;
        console.log(params);
        const some = 10;
        const theEnd = params;
        return some;
    }
    const theEnd = getSomething(demoEnv)
    console.log(demoEnv)
    });