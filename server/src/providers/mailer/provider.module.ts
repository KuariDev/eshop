import {Module} from "@nestjs/common";
import {MailerModule} from "@nestjs-modules/mailer";
import * as path from "path";
import {EjsAdapter} from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
              host: process.env["MAILER_HOST"],
              port: process.env["MAILER_PORT"],
              secure: false,
              auth: {
                  user: process.env["MAILER_LOGIN"],
                  pass: process.env["MAILER_PASSWORD"]
              }
            },
            defaults: {
                from: `"Caddy" <${process.env["MAILER_LOGIN"]}>`,
            },
            template: {
                dir: path.join(process.cwd(), 'templates/'),
                adapter: new EjsAdapter(),
                options: {
                    strict: false
                }
            }
        })
    ],
    exports: [
        MailerModule
    ]
})
export class MailerProviderModule {}