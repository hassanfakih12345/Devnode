<?php
// Emails a copy of the quote form to DevNode. Runs on the cPanel server (PHP).
// Set $to to the business email once it exists, e.g. 'info@devnode.info'.
$to = '';
$from = 'no-reply@devnode.info';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false]);
    exit;
}

// Honeypot: bots fill hidden fields.
if (!empty($_POST['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

function field($key, $max = 200) {
    $v = isset($_POST[$key]) ? trim((string) $_POST[$key]) : '';
    $v = str_replace(["\r", "\n"], ' ', $v);
    return mb_substr($v, 0, $max);
}

$name = field('name');
$phone = field('phone', 50);
$email = filter_var(field('email'), FILTER_VALIDATE_EMAIL) ?: '';
$message = isset($_POST['message']) ? mb_substr(trim((string) $_POST['message']), 0, 5000) : '';

if ($name === '' || $phone === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'missing_fields']);
    exit;
}

if ($to === '') {
    // Email not configured yet; WhatsApp already carries the request.
    echo json_encode(['ok' => true, 'emailed' => false]);
    exit;
}

$body = "New website request from devnode.info\n\n"
    . "Name: $name\n"
    . "Phone: $phone\n"
    . "Email: $email\n"
    . "Company: " . field('company') . "\n"
    . "Project type: " . field('type') . "\n"
    . "Country: " . field('country') . "\n"
    . "Budget: " . field('budget') . "\n"
    . "Timeline: " . field('timeline') . "\n\n"
    . "Details:\n$message\n";

$headers = "From: DevNode Website <$from>\r\n";
if ($email !== '') {
    $headers .= "Reply-To: $email\r\n";
}
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, "Website request: $name", $body, $headers);
echo json_encode(['ok' => $sent, 'emailed' => $sent]);
