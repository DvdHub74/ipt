<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        table {
            border: 1px solid !important;
            width: 100%;
        }
        th{
            background-color: rgb(21, 32, 82);
            color: white;
            width: calc(100% / 56;
            height: 30px;
        }
        td{
            height: 30px;
        }
        tbody tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        /* Estilo para las filas impares */
        tbody tr:nth-child(odd) {
            background-color: #ffffff;
        }

        td,
        th {
            text-align: center;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
    </style>
</head>
<body>
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Edad</th>
                    <th>Ministerio</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data as $persona)
                    <tr>
                        <td>
                            {{ $persona->id }}
                        </td>
                        <td>
                            {{ $persona->names }}
                        </td>
                        <td>
                            {{ $persona->lastnames }}
                        </td>
                        <td>
                            {{ \Illuminate\Support\Str::limit($persona->age, 3) }}
                        </td>
                        <td>
                            {{ $persona->ministrie[0]['name'] ?? 'Sin ministerio' }}
                        </td>
                        <td>
                            {{ $persona->active ? 'Activo' : 'Inactivo' }}
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>




</body>

</html>
