<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request)
                ->header('Acces-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS')
                ->header("Access-Control-Allow-Headers", "content-type, withcredentials, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Acces-Control-Request-Method, Access-Control-Request-Headers");
    }
}
