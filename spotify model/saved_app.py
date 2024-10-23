# Python program to demonstrate 
# selenium 
# import webdriver 
from selenium import webdriver 
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
# create webdriver object 
driver = webdriver.Chrome()
# get google.co.in 
'''driver.get("https://www.telerik.com/support/demos") 
driver.maximize_window()
searchIcon = driver.find_element(By.XPATH, "//span[@class='flexR gs-toggle-icon']")
searchIcon.click()
searchIcon.click()
enterText = driver.find_element(By.XPATH, "//input[@class='gs-input']")
enterText.send_keys("Kendo")
enterText.send_keys(Keys.RETURN)
enterText.click()
'''

# import webdriver
from selenium import webdriver

# create webdriver object
driver = webdriver.Chrome()

# enter keyword to search
keyword = "geeksforgeeks"

# get geeksforgeeks.org
driver.get("https://www.geeksforgeeks.org/")

# get element 
element = driver.find_element_by_class_name("gsc-input")

# print complete element
print(element)