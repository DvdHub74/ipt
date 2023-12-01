<?php

namespace App\Filament\Widgets;

use App\Models\Person;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;

class PersonActiveOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Activos', Person::query()->where('active', true)->count()),
            Stat::make('Inactivos', Person::query()->where('active', false)->count()),
        ];
    }
}
