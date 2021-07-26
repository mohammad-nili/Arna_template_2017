<?php
/**
 * Created by PhpStorm.
 * User: mr_nili
 * Date: 10/22/2017
 * Time: 10:48 AM
 */
class Car

{

    private $vars = array() ;

    function __set($name , $value)

    {

        $this->vars[$name] = $value ;

    }
    function __get($name)

    {

        return $this->vars[$name];

    }
    public $prop1 = "I'm a class property!";


}


$car1 = new Car();

//set values

$car1->wheel = 4 ;

$car1 ->color = 'red';

$car1->name = 'BMW';

// Get values

echo $car1->color ;

echo '<pre>';
print_r($car1);
echo '</pre>';

echo $car1 ->color;
