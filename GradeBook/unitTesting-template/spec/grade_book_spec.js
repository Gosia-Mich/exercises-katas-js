describe("my calculateGrade function", function() {

  it("should exist", function() {
    expect(calculateGrade).toBeDefined();
  });
  it("should return 'A' when score is 90,90,90", 
    function() {
    var result=calculateGrade(90,90,90)
    expect(result).toEqual("A");
  });

  it("should return 'B' when score is 80,80,80", 
    function() {
    var result=calculateGrade(80,80,80)
    expect(result).toEqual("B");
  });

  it("should return 'C' when score is 70,70,70", 
    function() {
    var result=calculateGrade(70,70,70)
    expect(result).toEqual("C");
  });

  it("should return 'D' when score is 60,60,60", 
    function() {
    var result=calculateGrade(60,60,60)
    expect(result).toEqual("D");
  });

  it("should return 'F' when score is 10,10,10", 
    function() {
    var result=calculateGrade(10,10,10)
    expect(result).toEqual("F");
  });

  it("should return 'A' when score is 90,80,100", 
    function() {
    var result=calculateGrade(90,80,100)
    expect(result).toEqual("A");
  });

  it("should return 'B' when score is 70,80,90", 
    function() {
    var result=calculateGrade(70,80,90)
    expect(result).toEqual("B");
  });

  it("should return 'C' when score is 70,60,80", 
    function() {
    var result=calculateGrade(70,60,80)
    expect(result).toEqual("C");
  });

  it("should return 'D' when score is 60,50,70", 
    function() {
    var result=calculateGrade(60,50,70)
    expect(result).toEqual("D");
  });

  it("should return 'F' when score is 5,10,15", 
    function() {
    var result=calculateGrade(5,10,15)
    expect(result).toEqual("F");
  });
  
  it("should return 'A' when score is 95,95,95", 
    function() {
    var result=calculateGrade(95,95,95)
    expect(result).toEqual("A");
  });

  it("should return 'B' when score is 85,85,85", 
    function() {
    var result=calculateGrade(85,85,85)
    expect(result).toEqual("B");
  });

  it("should return 'C' when score is 79,79,79", 
    function() {
    var result=calculateGrade(79,79,79)
    expect(result).toEqual("C");
  });

  it("should return 'D' when score is 69,69,69", 
    function() {
    var result=calculateGrade(69,69,69)
    expect(result).toEqual("D");
  });

it("should return 'F' when score is 59,59,59", 
    function() {
    var result=calculateGrade(59,59,59)
    expect(result).toEqual("F");
  });

it("should return 'F' when score is 0,0,0", 
    function() {
    var result=calculateGrade(0,0,0)
    expect(result).toEqual("F");
  });

it("should return 'InvalidGrades' when score is 101,101,101", 
    function() {
    var result=calculateGrade(101,101,101)
    expect(result).toEqual("InvalidGrades");
  });

it("should return 'InvalidGrades' when score is -1,-1,-1", 
    function() {
    var result=calculateGrade(-1,-1,-1)
    expect(result).toEqual("InvalidGrades");
  });

});














