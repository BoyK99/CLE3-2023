<?php
/**
 * @return array
 */
function getDishes()
{
    return [
        [
            "id" => 1,
            "name" => "Frikandel Tosti",
            "kitchen" => "Nederlands",
            "img" => "/img/tosti-frikandel-speciaal.jpg",
            "recipe" => "Tosti met wit of bruin brood, frikandel, uitjes, curry en mayonnaise",
        ],
        [
            "id" => 2,
            "name" => "Kroket Tosti",
            "kitchen" => "Nederlands",
            "img" => "menu/img/kroket-tosti.jpg",
        ],
        [
            "id" => 3,
            "name" => "Rookworst Tosti",
            "kitchen" => "Nederlands",
            "img" => "menu/img/rookworst-tosti.png",
        ],
        [
            "id" => 4,
            "name" => "Ham-Kaas Tosti",
            "kitchen" => "Nederlands",
            "img" => "menu/img/Tosti-ham-kaas.jpg",
        ],
        [
            "id" => 5,
            "name" => "Andijviestamppot met spekjes",
            "kitchen" => "Nederlands",
            "img" => "menu/img/andijvie.png",

        ],
        [
            "id" => 6,
            "name" => "Zuurkool met rookworst",
            "kitchen" => "Nederlands",
            "img" => "menu/img/zuurkool.jpg",
        ],
        [
            "id" => 7,
            "name" => "Rode Kool met speklapjes of braadworst",
            "kitchen" => "Nederlands",
            "img" => "menu/img/rode-kool-stamppot.jpg",
        ],
        [
            "id" => 8,
            "name" => "Spinazie met aardappelpuree en braadworst",
            "kitchen" => "Nederlands",
            "img" => "menu/img/spinazie.jpg",
        ],
        [
            "id" => 9,
            "name" => "Asperges, zalmfilet en gebakken aardappeltjes",
            "kitchen" => "Nederlands",
            "img" => "menu/img/asperges.jpg",
        ],
        [
            "id" => 10,
            "name" => "Tomatensoep met stokbrood",
            "kitchen" => "Nederlands",
            "img" => "menu/img/tomatensoep.jpg",
        ],
        [
            "id" => 11,
            "name" => "Groentesoep met eventueel stukjes gehaktbal",
            "kitchen" => "Nederlands",
            "img" => "menu/img/groentesoep.jpg",
        ],
        [
            "id" => 12,
            "name" => "Erwtensoep met rookworst",
            "kitchen" => "Nederlands",
            "img" => "menu/img/erwtensoep.jpg",
        ],
        [
            "id" => 13,
            "name" => "Mosterdsoep met stokbrood",
            "kitchen" => "Nederlands",
            "img" => "menu/img/mosterdsoep.jpg",
        ],
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getDishDetails($id)
{
    $tags = [
        1 => [
            "recipe" => "Put it in the oven and go!",
            "tags" => ['cheese', 'oven']
        ],
        2 => [
            "recipe" => "You can make this delicious Dutch meal by ...",
            "tags" => ['unox', 'healthy', 'stamppot', 'boerenkool']
        ],
        3 => [
            "recipe" => "Very nice when your grandma prepares this meal",
            "tags" => ['omnomnom']
        ],
        4 => [
            "recipe" => "Everytime in the city after midnight",
            "tags" => ['kapsalon', 'tasty', 'meat']
        ],
        5 => [
            "recipe" => "Specialty when on holiday in Spain",
            "tags" => ['fish']
        ],
    ];

    return $tags[$id];
}
