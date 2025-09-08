from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# --- Setup driver (make sure you have ChromeDriver installed) ---
driver = webdriver.Chrome()

try:
    # Open the login page
    driver.get("http://103.159.68.60:3535/auth/student/login")

    # Maximize window (optional)
    driver.maximize_window()

    # Fill in details
    driver.find_element(By.ID, "rollNumber").send_keys("23ETCCS166")
    driver.find_element(By.ID, "email").send_keys("vishesh.2023cse@technonjr.org")
    driver.find_element(By.ID, "password").send_keys("Visheshjain18@")

    # Click on submit button
    submit_btn = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
    submit_btn.click()

    # Wait for loading screen → then dashboard
    wait = WebDriverWait(driver, 30)  # timeout after 30s

    # Example: wait until loading screen disappears
    try:
        wait.until(EC.invisibility_of_element_located((By.CLASS_NAME, "loading")))
    except:
        print("⚠️ Loading screen not found or took too long.")

    # Wait until dashboard element is visible (adjust selector as needed)
    dashboard = wait.until(
        EC.presence_of_element_located((By.CSS_SELECTOR, ".dashboard"))
    )

    print("✅ Login successful, dashboard loaded!")

finally:
    # Keep browser open for debugging
    input("Press Enter to close browser...")
    driver.quit()
