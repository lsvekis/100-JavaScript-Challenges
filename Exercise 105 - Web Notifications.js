if (Notification.permission !== 'granted') Notification.requestPermission();
else new Notification('Hello from JavaScript!');