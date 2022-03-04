Webcam.set({
  height:350,
  width:350,
  dest_height:350,
  dest_width:350,
  image_format:'jpeg',
  jpeg_quality:100
  });
  
  camera= document.getElementById("webcam");
  Webcam.attach('#webcam');
  
  function snapshot(){
      Webcam.snap(function(data_uri){
        document.getElementById("captured").innerHTML="<img id='image2' src='"+data_uri+"'>";
      });
  }
  console.log("ml5version",ml5.version);
  teachable=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/q7a9uNlwX/model.json',modelLoaded);
  function modelLoaded(){
    console.log('Model Loaded sucessfully');
  
  }
  function check(){
  img=document.getElementById("image2");
  teachable.classify(img,gotResult);
  }
  
  function gotResult(erorr,result){
  if(erorr){
    console.log(erorr);
  }
  else{
    console.log(result);
    document.getElementById("span1").innerHTML=result[0].label;
    document.getElementById("span2").innerHTML=result[0].confidence
  }
  
  }
  
  