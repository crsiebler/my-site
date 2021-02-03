<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mime\Address;

class ContactController extends AbstractController
{
    #[Route('/api/contact', name: 'contact', methods: ['POST'])]
    public function index(Request $request, MailerInterface $mailer): Response
    {
        $payload = json_decode($request->getContent(), true);
        $receiptient = $this->getParameter('app.admin_email');
        $email = (new TemplatedEmail())
            ->from(new Address($receiptient, 'Your Website'))
            ->to(new Address($receiptient, 'Cory Siebler'))
            ->subject($payload['subject'])
            ->htmlTemplate('email/contact.html.twig')
            ->context([
                'payload' => $payload,
            ]);

        $mailer->send($email);

        return $this->json(['success' => true]);
    }
}
