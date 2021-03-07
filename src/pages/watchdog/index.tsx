import React, {Fragment} from "react";
import BreadCrumbs from "@govuk-react/breadcrumbs";
import Link from "@govuk-react/link";
import {H1} from "@govuk-react/heading";

export default function () {
    return (
        <Fragment>
            <BreadCrumbs>
                <BreadCrumbs.Link href="../">
                    Wesbury
                </BreadCrumbs.Link>
                Watchdog
            </BreadCrumbs>
            <H1>#Watchdog</H1>
        </Fragment>
    );
}
