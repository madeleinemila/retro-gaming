// ********* 4 BUTTON ***********************
// New version for using with Node, Socket.io




// ********** this version copied into git repo *************************





// pin numbers
int buttonL = 2;  
int buttonR = 4;
int buttonU = 6;
int buttonD = 8;

int buttonStateL, buttonStateR, buttonStateU, buttonStateD = 0;
int prevButtonStateL, prevButtonStateR, prevButtonStateU, prevButtonStateD = 0;


void setup() {
  pinMode(buttonL, INPUT);
  pinMode(buttonR, INPUT);
  pinMode(buttonU, INPUT);
  pinMode(buttonD, INPUT);
  Serial.begin(57600); // cf higher baud rate than 9600
}


void loop() {

  // ******** left ************
  // read state
  buttonStateL = digitalRead(buttonL);

  if (buttonStateL != prevButtonStateL) {
    if (buttonStateL == HIGH) {
      Serial.println(1);
    }
    else {
      Serial.println(0);  
    }
    delay(50); // small delay to avoid bouncing
  }
  prevButtonStateL = buttonStateL;


  // ******** right ***********
  // read state
  buttonStateR = digitalRead(buttonR);

  if (buttonStateR != prevButtonStateR) {
    if (buttonStateR == HIGH) {
      Serial.println(3);
    }
    else {
      Serial.println(2);  
    }
    delay(50); // small delay to avoid bouncing
  }
  prevButtonStateR = buttonStateR;



  // ******** up  *************
  // read state
  buttonStateU = digitalRead(buttonU);

  if (buttonStateU != prevButtonStateU) {
    if (buttonStateU == HIGH) {
      Serial.println(5);
    }
    else {
      Serial.println(4);  
    }
    delay(50); // small delay to avoid bouncing
  }
  prevButtonStateU = buttonStateU;



  // ******** down  *************
  // read state
  buttonStateD = digitalRead(buttonD);

  if (buttonStateD != prevButtonStateD) {
    if (buttonStateD == HIGH) {
      Serial.println(7);
    }
    else {
      Serial.println(6);  
    }
    delay(50); // small delay to avoid bouncing
  }
  prevButtonStateD = buttonStateD;
  
}
