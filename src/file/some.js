// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Untitled', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Untitled', async function() {
    await driver.get("https://www.facebook.com/")
    await driver.findElement(By.id("email")).sendKeys("{{login}}")
    await driver.findElement(By.id("pass")).click()
    await driver.findElement(By.id("pass")).sendKeys("{{password}}")
    await driver.findElement(By.name("login")).click()
    vars["newEvents"] = await driver.findElement(By.xpath("//div[2]/span/span")).getText()
  })
})
