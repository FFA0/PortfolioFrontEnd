import {
    trigger,
    style,
    animate,
    transition,
    query,
    group,
} from "@angular/animations"

export let slide =
    trigger("routeAnimations", [
        transition("inicio => login", slideTo("left")),
        transition("login => inicio", slideTo("right")),
    ])

function slideTo(direcction: string) {
    let optional = { optional: true };
    return [
        style({ position: "relative" }),
            query(":enter, :leave", [
                style({
                    position: "absolute",
                    top: 0,
                    [direcction]: 0,
                    width: "100%"
                })
            ], optional),
            query(":enter",[
                style({[direcction]: "100%"})
            ]),
            group([
                query(":leave", [
                    animate("400ms ease", style({[direcction]: "-100%"}))
                ], optional),
                query(":enter",[
                    animate("400ms ease", style({[direcction]: "0%"}))
                ])
            ])
    ]
}