import {
    trigger,
    style,
    animate,
    transition,
    query,
    group,
} from "@angular/animations"

export let deslizar =
    trigger("routeAnimations", [
        transition("inicio => login", deslizarhacia("left")),
        transition("login => inicio", deslizarhacia("right")),
    ])

function deslizarhacia(direccion: string) {
    let optional = { optional: true };
    return [
        style({ position: "relative" }),
            query(":enter, :leave", [
                style({
                    position: "absolute",
                    top: 0,
                    [direccion]: 0,
                    width: "100%"                    
                })
            ], optional),
            query(":enter", [
                style({[direccion]: "100%"})
            ]),
            group([
                query(":leave", [
                    animate("400ms ease-in-out", style({[direccion]: "-100%"}))
                ], optional),
                query(":enter",[
                    animate("400ms ease-in-out", style({[direccion]: "0%"}))
                ])
            ])
    ]
}