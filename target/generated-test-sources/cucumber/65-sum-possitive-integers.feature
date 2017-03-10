Feature: Sum possitive integers


  @COM-2 @OPEN
  Scenario Outline: Two possitive integers
    Given two numbers: '<first>', '<second>' 
    When I sum them
    Then Their sum should be '<result>'
    
    Examples:  
         |first|second|result|
         |   12|    18|    30|
         |   20|     5|    25|
         |   12|     5|    17|
         
      


  @COM-2 @OPEN
  Scenario Outline: Three possitive integers
    Given three numbers: '<first>', '<second>', '<third>' 
    When I sum them
    Then Their sum should be '<result>'
    
    Examples:  
         |first|second|third|result|
         |   12|    18|   30|    60|
         |   20|     5|   25|    50|
         |   12|     5|   17|    34|
