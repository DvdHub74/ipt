<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Person;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Psy\VersionUpdater\Checker;
use Filament\Resources\Resource;
use Filament\Forms\Component\Number;
use Filament\Forms\Components\Checkbox;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;
use Filament\Tables\Columns\CheckboxColumn;
use App\Filament\Resources\PersonResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\PersonResource\RelationManagers;

class PersonResource extends Resource
{
    protected static ?string $model = Person::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
                TextInput::make('name')
                ->label('Nombre')
                ->required()
                ->maxLength(2555),
                TextInput::make('lastname')
                ->label('Apellido')
                ->required()
                ->maxLength(2555),
                TextInput::make('age')
                ->label('Edad')
                ->numeric()
                ->required()
                ->maxLength(2555),
                Checkbox::make('active')
                ->label('Activo')
                ->default(true)
                ->disabled(false),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                ->searchable()
                ->sortable()
                ->label('Nombre'),
                TextColumn::make('lastname')
                ->searchable()
                ->label('Apellido'),
                TextColumn::make('age')
                ->sortable()
                ->label('Edad'),
                CheckboxColumn::make('active')
                ->label('Estado'),

            ])
            ->filters([
                SelectFilter::make('active')
                ->options([
                    true => 'Activo',
                    false => 'Inactivo',
                ])
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPeople::route('/'),
            'create' => Pages\CreatePerson::route('/create'),
            'edit' => Pages\EditPerson::route('/{record}/edit'),
        ];
    }
}
