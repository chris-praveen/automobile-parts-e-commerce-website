<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process the form data and validate
    $name = sanitizeInput($_POST["name"]);
    $email = sanitizeInput($_POST["email"]);
    $phone = sanitizeInput($_POST["phone"]);
    $partName = sanitizeInput($_POST["partName"]);
    $quantity = sanitizeInput($_POST["quantity"]);
    $address = sanitizeInput($_POST["address"]);
    $zipcode = sanitizeInput($_POST["zipcode"]);

    // Validate the data
    $errors = validateForm($name, $email, $phone, $partName, $quantity, $address, $zipcode);

    if (empty($errors)) {
        // Process the form data (e.g., store in a database)
        // Redirect to a success page
        header("Location: success.php");
        exit;
    }
}

function validateForm($name, $email, $phone, $partName, $quantity, $address, $zipcode) {
    $errors = [];

    if (empty($name)) {
        $errors["name"] = "Name is required.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors["email"] = "Invalid email address.";
    }

    if (!preg_match("/^[6-9]\d{9}$/", $phone)) {
        $errors["phone"] = "Invalid phone number.";
    }

    if (empty($partName)) {
        $errors["partName"] = "Part name is required.";
    }

    if (!is_numeric($quantity) || $quantity < 1) {
        $errors["quantity"] = "Invalid quantity.";
    }

    if (empty($address)) {
        $errors["address"] = "Address is required.";
    }

    if (!preg_match("/^[0-9]{6}$/", $zipcode)) {
        $errors["zipcode"] = "Invalid ZIP code.";
    }

    return $errors;
}

function sanitizeInput($input) {
    // Sanitize the input data if needed
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Automobile Parts Order Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            background: linear-gradient(135deg, #a2f7f7, #a2f7f7);
        }
        .container {
            max-width: 700px;
            width: 100%;
            background-color: #fff;
            padding: 25px 30px;
            border-radius: 5px;
            box-shadow: 0 5px 10px rgba(0,0,0,0.15);
        }
        .container .title {
            font-size: 25px;
            font-weight: 500;
            position: relative;
        }
        .container .title::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            height: 3px;
            width: 30px;
            border-radius: 5px;
            background: linear-gradient(135deg, #b2f14c, #c1f34c);
        }
        .content form .user-details {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 20px 0 12px 0;
        }
        form .user-details .input-box {
            margin-bottom: 15px;
            width: calc(100% / 2 - 20px);
        }
        form .input-box span.details {
            display: block;
            font-weight: 500;
            margin-bottom: 5px;
        }
        .user-details .input-box input {
            height: 45px;
            width: 100%;
            outline: none;
            font-size: 16px;
            border-radius: 5px;
            padding-left: 15px;
            border: 1px solid #ccc;
            border-bottom-width: 2px;
            transition: all 0.3s ease;
        }
        .user-details .input-box input:focus,
        .user-details .input-box input:valid {
            border-color: #51cdf0;
        }
        .button {
            height: 45px;
            margin: 35px 0;
        }
        .button input {
            height: 100%;
            width: 100%;
            border-radius: 5px;
            border: none;
            color: #fff;
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.3s ease;
            background: linear-gradient(135deg, #a2f7f7, #a2f7f7);
        }
        .button input:hover {
            background: linear-gradient(-135deg, #42d166, #3de23d);
        }
        .error-message {
            color: red;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="title">Automobile Parts Order Form</div>
        <div class="content">
            <form id="orderForm" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" onsubmit="return validateForm()">
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">Full Name</span>
                        <input type="text" placeholder="Enter your full name" required name="name" id="name" value="<?php echo isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : ""; ?>">
                        <div class="error-message" id="name-error"><?php echo isset($errors["name"]) ? $errors["name"] : ""; ?></div>
                    </div>
                    <div class="input-box">
                        <span class="details">Email Address</span>
                        <input type="email" placeholder="Enter your email" required name="email" id="email" value="<?php echo isset($_POST["email"]) ? htmlspecialchars($_POST["email"]) : ""; ?>">
                        <div class="error-message" id="email-error"><?php echo isset($errors["email"]) ? $errors["email"] : ""; ?></div>
                    </div>
                    <div class="input-box">
                        <span class="details">Phone Number</span>
                        <input type="tel" placeholder="Enter your phone number" required name="phone" id="phone" value="<?php echo isset($_POST["phone"]) ? htmlspecialchars($_POST["phone"]) : ""; ?>">
                        <div class="error-message" id="phone-error"><?php echo isset($errors["phone"]) ? $errors["phone"] : ""; ?></div>
                    </div>
                    <div class="input-box">
                        <span class="details">Part Name</span>
                        <input type="text" placeholder="Enter the part name" required name="partName" id="partName" value="<?php echo isset($_POST["partName"]) ? htmlspecialchars($_POST["partName"]) : ""; ?>">
                        <div class="error-message" id="partName-error"><?php echo isset($errors["partName"]) ? $errors["partName"] : ""; ?></div>
                    </div>
                    <div class="input-box">
                        <span class="details">Quantity</span>
                        <input type="number" placeholder="Enter the quantity" required name="quantity" id="quantity" oninput="calculateTotal()" value="<?php echo isset($_POST["quantity"]) ? htmlspecialchars($_POST["quantity"]) : ""; ?>">
                        <div class="error-message" id="quantity-error"><?php echo isset($errors["quantity"]) ? $errors["quantity"] : ""; ?></div>
                    </div>
                    <div class="input-box">
                        <span class="details">Address</span>
                        <input type="text" placeholder="Enter your address" required name="address" id="address" value="<?php echo isset($_POST["address"]) ? htmlspecialchars($_POST["address"]) : ""; ?>">
                        <div class="error-message" id="address-error"><?php echo isset($errors["address"]) ? $errors["address"] : ""; ?></div>
                    </div>
                    <div class="input-box">
                        <span class="details">ZIP Code</span>
                        <input type="text" placeholder="Enter your ZIP code" required name="zipcode" id="zipcode" value="<?php echo isset($_POST["zipcode"]) ? htmlspecialchars($_POST["zipcode"]) : ""; ?>">
                        <div class="error-message" id="zipcode-error"><?php echo isset($errors["zipcode"]) ? $errors["zipcode"] : ""; ?></div>
                    </div>
                </div>
                <div class="button">
                    <input type="submit" value="Submit">
                </div>
            </form>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        function validateForm() {
            document.querySelectorAll(".error-message").forEach(function (element) {
                element.innerHTML = "";
            });
            var nameInput = document.getElementById("name").value;
            if (nameInput.length < 3) {
                displayError("Name should be at least 3 characters.", "name-error");
                return false;
            }
            var emailInput = document.getElementById("email").value;
            if (!/^\S+@\S+\.\S+$/.test(emailInput)) {
                displayError("Invalid email address.", "email-error");
                return false;
            }
            var phoneInput = document.getElementById("phone").value;
            if (!/^[6-9]\d{9}$/.test(phoneInput)) {
                displayError("Invalid phone number.", "phone-error");
                return false;
            }
            var partNameInput = document.getElementById("partName").value;
            if (partNameInput.trim() === "") {
                displayError("Please enter the part name.", "partName-error");
                return false;
            }
            var quantityInput = document.getElementById("quantity").value;
            if (quantityInput < 1) {
                displayError("Please enter a valid quantity.", "quantity-error");
                return false;
            }
            var addressInput = document.getElementById("address").value;
            if (addressInput.trim() === "") {
                displayError("Please enter your address.", "address-error");
                return false;
            }
            var zipcodeInput = document.getElementById("zipcode").value;
            if (!/^[0-9]{5}$/.test(zipcodeInput)) {
                displayError("Invalid ZIP code. Please enter 5 digits.", "zipcode-error");
                return false;
            }
            return true;
        }
        function displayError(message, errorId) {
            var errorElement = document.createElement("div");
            errorElement.innerHTML = message;
            errorElement.className = "error-message";
            errorElement.style.color = "red";
            document.getElementById(errorId).appendChild(errorElement);
        }
    </script>
</body>
</html>

