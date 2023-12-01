<?php

namespace App\Filament\Widgets;

use App\Models\Person;
use Filament\Widgets\ChartWidget;

class PersonChart extends ChartWidget
{
    protected static ?string $heading = 'Chart';


    protected function getData(): array
    {
        $edades = Person::select('age')->get()->pluck('age')->toArray();
        $conteoEdades = array_count_values($edades);

        return [
            'datasets' => [
                [
                    'label' => 'Edades',
                    'data' => array_values($conteoEdades),
                    'backgroundColor' => [
                        'rgba(255, 99, 132, 0.5)', // #FF6384
                        'rgba(54, 162, 235, 0.5)', // #36A2EB
                        'rgba(255, 206, 86, 0.5)', // #FFCE56
                    ],
                ],
            ],
            'labels' => array_keys($conteoEdades),
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }
}
