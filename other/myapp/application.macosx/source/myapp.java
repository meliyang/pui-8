import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class myapp extends PApplet {




int numColors, numRows, numCols;
int rectDrawSize;
int[] board = new int[100];
int curColor; // int referring to index of current color (top left box)
Set<Integer> body = new HashSet<Integer>(); // indices of same color
Set<Integer> edges = new HashSet<Integer>(); // indices of body's neighbors


public void setup()
{
  //frameRate(60);
  
  background(0);

  numColors = 4;
  rectDrawSize = 40;
  numCols = 10;
  numRows = 10;
  for(int i = 0; i < 100; i++) {
    board[i] = PApplet.parseInt(random(4));
  }
  body.add(0);
  edges.add(1);
  edges.add(10);
}



public void draw()
{
  background(134, 163, 147);
  noStroke();
  fill(255);
  
  //float d = dist(mouseX, mouseY, x, y);
  // GAME BOX
  rect(200, 200, 400, 400);
  for (int i = 0; i < 100; i++) {
    int drawx = i%10*rectDrawSize + 200;
    int drawy = i/10*rectDrawSize + 200;
    if (board[i] == 0) fill(255, 221, 226);
    else if (board[i] == 1) fill(86, 71, 135);
    else if (board[i] == 2) fill(226, 252, 239);
    else if (board[i] == 3) fill(41, 73, 54);
    else fill(255);
    
    rect(drawx, drawy, rectDrawSize, rectDrawSize);
  }
  
  // FILL COLOR BOXES
  fill(255, 221, 226);
  ellipse(250, 725, 50, 50);
  fill(86, 71, 135);
  ellipse(350, 725, 50, 50);
  fill(226, 252, 239);
  ellipse(450, 725, 50, 50);
  fill(41, 73, 54);
  ellipse(550, 725, 50, 50);
  // EXTRA COLORS
  //fill(91, 130, 102);
  //fill(119, 132, 114);
  
  curColor = board[0]; 
}

public void mousePressed()
{
  if (dist(mouseX, mouseY, 250, 725) <= 50) curColor = 0;
  else if (dist(mouseX, mouseY, 350, 725) <= 50) curColor = 1;
  else if (dist(mouseX, mouseY, 450, 725) <= 50) curColor = 2;
  else if (dist(mouseX, mouseY, 550, 725) <= 50) curColor = 3;

  for (int curInd : body){
    board[curInd] = curColor;
  }

  boolean loopThrough = true;
  while (loopThrough){
    loopThrough = false;
    Set<Integer> temp = new HashSet<Integer>();
    for (int curInd : edges){
      int row = curInd/10;
      int col = curInd%10;
      if (board[curInd] == curColor) {
        loopThrough = true;
        body.add(curInd);
        if (!body.contains(curInd - 1) && (col > 0)) temp.add(curInd - 1);
        if (!body.contains(curInd + 1) && (col < 9)) temp.add(curInd + 1);
        if (!body.contains(curInd - 10) && (row > 0)) temp.add(curInd - 10);
        if (!body.contains(curInd + 10) && (row < 9)) temp.add(curInd + 10);
      } else {
        temp.add(curInd);
      }
    }
    
    edges = temp;
    
  }
}
  public void settings() {  size(800,800); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "myapp" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
