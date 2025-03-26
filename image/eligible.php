<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vote Eligibility</title>
</head>
<body>
    <h1 align="center">Person Eligible to Vote or Not</h1>
    <form method="POST" action="">
        Enter your age: 
        <input type="text" name="age" required><br><br>
        <input type="submit" name="submit" value="Check Eligibility">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $age = $_POST['age'];
        
        if (is_numeric($age)) {
            if ($age >= 18) {
                echo "<h2 align='center'>You are eligible to vote.</h2>";
            } else {
                echo "<h2 align='center'>You are not eligible to vote. You must be 18 or older.</h2>";
            }
        } else {
            echo "<h2 align='center'>Please enter a valid numeric age.</h2>";
        }
    }
    ?>
</body>
</html>
